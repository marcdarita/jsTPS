// package demo;

// import jtps.jTPS_Transaction;

export class AndMask_Transaction {
/**
 *
 * @author McKillaGorilla
 */

    constructor() {
    // THIS IS THE OBJECT IT WILL MANIPULATE
    var num;
    
    var intNum;
    
    // AMOUNT TO MASK FOR NUM
    var mask;

    }

    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param initNum
     * @param initAmountToAdd 
     */
    AndMask_Transaction = (initNum, initIntNum, initMask) => {
        // KEEP THESE FOR LATER
        this.num = initNum;
        intNum = initIntNum;
        this.mask = initMask;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    //@Override
    doTransaction = () => {
        num.andMask(mask);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    //@Override
    undoTransaction = () => {
        this.num.setNum(intNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    //@Override
    toString = () => {
        return "And Mask " + this.mask;
    }
}

export default AddMask_Transaction