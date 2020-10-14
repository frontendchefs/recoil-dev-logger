import { useTransactionObservation_UNSTABLE } from 'recoil';


function RecoilLogger() {
    useTransactionObservation_UNSTABLE((event) => {
        // listen event on every recoil state change.
        
        event.modifiedAtoms.forEach((name) => {
            // log every action, atom value and previous atom value.
            
            console.log('Action Name', name);
            console.log('Atom Value', event.atomValues.get(name));
            console.log('Previous Atom Value', event.previousAtomValues.get(name));
        })
    });

    return null;
}

export default RecoilLogger;
