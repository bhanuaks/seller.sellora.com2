import { responseFun } from "@/Http/helper";
import { getLoginSeller } from "../getLoginUser/route";
import NavMenuModel from "@/Http/Models/NavMenuModel";
import SellerUserPermissionModel from "@/Http/Models/SellerUserPermissionModel";
import mongoose from "mongoose";
import { connectDb } from "@/Http/dbConnect2";
import ChildMenuModel from "@/Http/Models/ChildMenuModel";


// export async function GET(request) {
    
//     await connectDb();

//     const SubSeller = await getLoginSeller();
//     if(!SubSeller){
//         return responseFun(false, {message: "Seller not login" }, 403)
//     } 
//     try{ 
//         const menu = await SellerUserPermissionModel.aggregate([
//            {
//              $match:{user_id: new mongoose.Types.ObjectId(SubSeller.sub_seller_id) }
//             },

//             {
//                 $lookup:{
//                     from:"navmenus",
//                     let : { menuId : "$menu_id", permission: "$permission"},
//                     pipeline:[
//                         {
//                             $match:{
//                                 $expr:{
//                                     $and:[
//                                         {$eq : ["$_id", "$$menuId"] },
//                                         {$eq : ["$status", "Active"] },
//                                         {
//                                             $or: [
//                                                 { $eq: ["$pid", null] },
//                                                 { $not: [{ $ifNull: ["$pid", false] }] }  
//                                             ]
//                                             }
//                                     ]
//                                 },
                                
//                             }
//                         },
//                         {
//                                     $lookup:{
//                                         from:"navmenus",
//                                         let: { pids : "$_id" },
//                                         pipeline:[
//                                             {
//                                                 $match:{
//                                                     $expr:{
//                                                         $and:[
//                                                            {$eq : ["$pid", "$$pids"]} 
//                                                         ]
//                                                     }
//                                                 }
//                                             }
//                                         ],
//                                         as:"submenu"
//                                     }
//                          },
//                         {
//                             $project:{
//                                 _id:1,
//                                 name:1,
//                                 slug:1,
//                                 order:1,
//                                 pid:1,
//                                 show:1,
//                                 permission:"$$permission",
//                                 submenu:1
//                             }
//                         }
//                     ],  
//                     as:"menu"
//                 }
//             },
//             { $unwind: "$menu" }, // flatten array
//             {
//                 $replaceRoot: { newRoot: "$menu" } // use menu object as root
//             }
//         ]);
       
//         return responseFun(true, { menu }, 200); 
//     }catch(error){
//         console.log(error);
//         return responseFun(false, {message:error.message}, 500)
//     }

// }



export async function GET(request) {
    await connectDb();

    const SubSeller = await getLoginSeller();
    if(!SubSeller){
        return responseFun(false, {message: "Seller not login" }, 403)
    } 
    try{  
        const userId = SubSeller.sub_seller_id
         const permissions = await SellerUserPermissionModel.aggregate([
    {
      $match: { user_id: new mongoose.Types.ObjectId(SubSeller.sub_seller_id) }
    },
    {
      $lookup: {
        from: 'navmenus',
        localField: 'menu_id',
        foreignField: '_id',
        as: 'menu'
      }
    },
    { $unwind: '$menu' },
    {
      $project: {
        _id: '$menu._id',
        name: '$menu.name',
        slug: '$menu.slug',
        pid: '$menu.pid',
        order:'$menu.order',
        show:'$menu.show',
        permission: '$permission'
      }
    },
    {
        $match: { 
            
            permission: { $ne: 'none' }, 
        }
    },
    {
      $sort: { order: 1 }
    }
  ]);

  const permissionedIds = new Set(permissions.map(p => p._id.toString()));
  const parentIds = permissions.map(p => p.pid).filter(Boolean).map(p => p.toString());
  const missingParents = parentIds.filter(pid => !permissionedIds.has(pid));

  
  const parentMenus = await NavMenuModel.find({ _id: { $in: missingParents } }).lean();
  const parentEntries = parentMenus.map(menu => ({
    _id: menu._id,
    name: menu.name,
    slug: menu.slug,
    pid: menu.pid,
    order:menu.order,
    show:menu.show,
    permission: 'inherited'
  }));

  const allPermissioned = [...permissions, ...parentEntries];

  const allPermissionedMap = new Map(
    allPermissioned.map(menu => [menu._id.toString(), menu])
  );

  
  const childIds = permissions
    .filter(p => p.pid)
    .map(p => p._id.toString());

  const subChildren = await NavMenuModel.find({ pid: { $in: childIds } }).lean();
  const validSubChildren = subChildren.map(sc => ({
    _id: sc._id,
    name: sc.name,
    slug: sc.slug,
    pid: sc.pid,
    order:sc.order,
    show:sc.show,
    permission: 'inherited'
  }));

  
  const fullMenus = [...allPermissioned, ...validSubChildren];

  
  

  const menuTree = buildMenuTree(fullMenus);


   const permissionsByUser = await SellerUserPermissionModel.find({ user_id: userId })
      .populate('menu_id') 
      .lean();

    const formattedPermissionByUser = permissionsByUser.map(item => ({
      menuName: item.menu_id?.name,
      slug: item.menu_id?.slug,
      pid: item.menu_id?.pid,
      permission: item.permission
    }));


    const childMenuPermission = await ChildMenuModel.find()

       
        return responseFun(true,{data:menuTree, userPermission:formattedPermissionByUser, childMenuPermission:childMenuPermission}, 200) 
    }catch(error){
        console.log(error);
        return responseFun(false,{error}, 200)
    }

         
}


function buildMenuTree(items, parentId = null) {
    return items
      .filter(item => String(item.pid) === String(parentId))
      .sort((a, b) => a.order - b.order)
      .map(item => ({
        _id: item._id,
        name: item.name,
        slug: item.slug,
        order: item.order,
        show: item.show,
        permission: item.permission,
        submenus: buildMenuTree(items, item._id)
      }));
  }