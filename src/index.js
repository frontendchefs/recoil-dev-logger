import { useTransactionObservation_UNSTABLE } from 'recoil';


function RecoilLogger() {
    useTransactionObservation_UNSTABLE((event) => {
        event.modifiedAtoms.forEach((name) => {
            console.log('Action Name', name);
            console.log('Atom Value', event.atomValues.get(name));
            console.log('Previous Atom Value', event.previousAtomValues.get(name));
        })
    });

    return null;
}

export default RecoilLogger;
