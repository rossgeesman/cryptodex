const TrezorConnect = window.TrezorConnect
export default TrezorConnect
//TrezorConnect.composeAndSignTx(outputs, (result) => {
//    if (result.success) {
//        TrezorConnect.pushTransaction(result.serialized_tx, (pushResult) => {
//            if (pushResult.success) {
//                console.log('Transaction pushed. Id:', pushResult.txid) // ID of the transaction
//            } else {
//                console.error('Error:', pushResult.error) // error message
//            }
//        })
//    } else {
//        console.error('Error:', result.error) // error message
//    }
//})
