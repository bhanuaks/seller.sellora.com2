import { getPricingLabel } from '@/Http/helper';
import React from 'react';

const WalletPaymentReceipt = ({receiptId, name, email, paymentMethod, date, transactionId, amount, tax, taxAmount, totalAmount}) => {
  return (
    <div style={{
      backgroundColor: '#f4f6f9',
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      margin: 0,
      padding: '40px'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: 'auto',
        background: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          textAlign: 'center',
          borderBottom: '2px solid #e2e2e2',
          paddingBottom: '20px',
          marginBottom: '30px'
        }}>
          <h1 style={{ margin: 0, color: '#333', fontSize: '24px' }}>Payment Receipt</h1>
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>
            Receipt : <strong>#{receiptId}</strong>
          </p>
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>
            Date: <strong> {new Date(date).toLocaleDateString("en-Us", {
                        year:"numeric",
                        month:"short",
                        day: "numeric"
                      })} </strong>
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{
            marginBottom: '10px',
            fontSize: '16px',
            color: '#444',
            borderBottom: '1px solid #eee',
            paddingBottom: '5px'
          }}>Customer Details</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#555', fontWeight: 500 }}>Name:</span>
            <span style={{ color: '#111' }}>{name}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#555', fontWeight: 500 }}>Email:</span>
            <span style={{ color: '#111' }}>{email}</span>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{
            marginBottom: '10px',
            fontSize: '16px',
            color: '#444',
            borderBottom: '1px solid #eee',
            paddingBottom: '5px'
          }}>Payment Information</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#555', fontWeight: 500 }}>Payment Method:</span>
            <span style={{ color: '#111' }}>{paymentMethod}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#555', fontWeight: 500 }}>Transaction ID:</span>
            <span style={{ color: '#111' }}>{transactionId}</span>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{
            marginBottom: '10px',
            fontSize: '16px',
            color: '#444',
            borderBottom: '1px solid #eee',
            paddingBottom: '5px'
          }}>Amount</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#555', fontWeight: 500 }}>Subtotal:</span>
            <span style={{ color: '#111' }}>{getPricingLabel(amount || 0)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#555', fontWeight: 500 }}>Tax ({tax || 0}%):</span>
            <span style={{ color: '#111' }}>{getPricingLabel(taxAmount || 0)}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#222',
            borderTop: '1px solid #eee',
            paddingTop: '10px',
            marginTop: '10px'
          }}>
            <span>Total Paid:</span>
            <span>{getPricingLabel(totalAmount || 0)}</span>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#999',
          marginTop: '40px'
        }}>
          This is an automatically generated receipt. For any queries, contact customercare@sellora.com
        </div>
      </div>
    </div>
  );
};

export default WalletPaymentReceipt;
