import {
  CheckIcon,
  ClockIcon,
  MinusCircleIcon,
  BellAlertIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500':
            status === 'pending' || status === 'canceled',
          'bg-green-500 text-white': status === 'paid',
          'bg-blue-500 text-white': status === 'overdue',
        }
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'canceled' ? (
        <>
          Canceled
          <MinusCircleIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'overdue' ? (
        <>
          Overdue
          <BellAlertIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
