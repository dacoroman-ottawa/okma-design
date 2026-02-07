import paymentsData from '@/../product/sections/payments/data.json'
import peopleData from '@/../product/sections/people/data.json'
import { PaymentsView } from './components/PaymentsView'

export default function PaymentsViewPreview() {
  return (
    <PaymentsView
      transactions={paymentsData.transactions}
      balances={paymentsData.studentBalances}
      students={peopleData.students}
      teachers={peopleData.teachers}
      instruments={peopleData.instruments}
      enrollments={peopleData.enrollments}
      onViewTransaction={(id) => console.log('View transaction:', id)}
      onViewStudentHistory={(studentId) =>
        console.log('View student history:', studentId)
      }
      onAddCreditPurchase={() => console.log('Add credit purchase')}
      onAddAdjustment={() => console.log('Add adjustment')}
      onAddInventoryPayment={() => console.log('Add inventory payment')}
      onAddCreditsForStudent={(studentId, enrollmentId) =>
        console.log('Add credits for student:', { studentId, enrollmentId })
      }
    />
  )
}
