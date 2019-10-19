import jsTPS1 from './jsTPS1.js'
import Num from './Num.js'
import AndMask_Transaction from './AndMask_Transaction.js'
import AddToNum_Transaction from './AddToNum_Transaction.js'

export class jsTPS_Controller {
    constructor (tpsView, tps, tpsNum) {
        this.view = tpsView;
        this.TPS = tps;
        this.num = tpsNum;

        this.set()
    }

    
}

export default jsTPS_Controller