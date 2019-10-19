// package demo;

// import jtps.jTPS_Transaction;

/**
 *
 * @author McKillaGorilla
 */
export class OrMask_Transaction {

    constructor() {
    // THIS IS THE OBJECT IT WILL MANIPULATE
    let num;
    
    let intNum;
    
    // AMOUNT TO MASK FOR NUM
    let mask;
    }

    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param initNum
     * @param initAmountToAdd 
     */
    pOrMask_Transaction = ( initNum, initIntNum, initMask) => {
        // KEEP THESE FOR LATER
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    //@Override
    doTransaction = () => {
        this.num.orMask(this.mask);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    //@Override
    undoTransaction = () => {
        this.num.setNum(this.intNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    //@Override
    toString = () => {
        return "Or Mask " + this.mask;
    }
}

export default OrMask_Transaction