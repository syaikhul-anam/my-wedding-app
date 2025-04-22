'use client';

import Image from 'next/image';

interface BankAccount {
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  qrCode?: string;
}

const bankAccounts: BankAccount[] = [
  {
    bankName: 'Bank ABC',
    accountHolder: 'John Doe',
    accountNumber: '1234567890',
    qrCode: '/images/qr-code-1.png',
  },
  {
    bankName: 'Bank XYZ',
    accountHolder: 'Jane Doe',
    accountNumber: '0987654321',
    qrCode: '/images/qr-code-2.png',
  },
];

export default function BankDetails() {
  return (
    <div className="space-y-8">
      <p className="text-gray-600 text-center">
        Your presence is our greatest gift, but if you wish to give a gift,
        you can transfer to one of our bank accounts below.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {bankAccounts.map((account, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {account.bankName}
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Account Holder:</span>{' '}
                {account.accountHolder}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Account Number:</span>{' '}
                {account.accountNumber}
              </p>
            </div>
            {account.qrCode && (
              <div className="mt-4">
                <Image
                  src={account.qrCode}
                  alt="QR Code"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 