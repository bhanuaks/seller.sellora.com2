import { baseUrl } from "@/Http/helper";
import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <>
    <div className="error_outer_403">
  <div className="error-container">
    <img src={`${baseUrl}front/assets/images/564619.png`} alt="403 Forbidden" />
    <h1>403</h1>
    <h2>Access Forbidden</h2>
    <p>Sorry, you don't have permission to access this page.</p>
    <Link href={`${baseUrl}dashboard`}>Go Back Home</Link>
  </div>
</div>

    </>
  );
}
