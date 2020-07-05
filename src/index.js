import { useTransactionObservation_UNSTABLE } from 'recoil';


function RecoilLogger() {
    useTransactionObservation_UNSTABLE((e) => {
        e.modifiedAtoms.forEach((name) => {
            console.log('Action Name', name);
            console.log('Atom Value', e.atomValues.get(name));
            console.log('Previous Atom Value', e.previousAtomValues.get(name));
        })
    })
}

export default RecoilLogger;
