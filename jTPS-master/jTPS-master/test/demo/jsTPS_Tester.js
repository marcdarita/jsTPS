// package demo;

// import java.io.PrintStream;
// import java.util.Scanner;
// import jtps.jTPS;
// import jtps.jTPS_Transaction;

import jsTPS1 from './jsTPS1'
import Num from './Num'

/**
 * This driver demonstrates simple usage of the jTPS API.
 * 
 * @author THE McKilla Gorilla (accept no imposters)
 * @version 2.0
 */
export class jsTPS_Tester {

    constructor() {
    // HERE'S OUR TRANSACTION PROCESSING SYSTEM
    let tps = new jsTPS1();
    
    // HERE'S THE DATA WE'RE MANIPULATING IN THIS DEMO
    let num = new Num();
    
    // THESE ARE TO HELP WITH I/O
    //let input = new Scanner(System.in);
    //let out = System.out;

    }

    /**
     * This runs our demo program. Note that it presents a 
     * menu, retrieves the input, and executes the selected
     * behavior.
     * 
     * @param args Not used in this demo.
     */
    main = (args) => {
        // LOOP FLAG VARIABLE
        let keepGoing = true;
        while (keepGoing) {
            // DISPLAY THE CURRENT TPS
            out.println("CURRENT jTPS:");
            out.println(this.tps);
            out.println();
            
            // DISPLAY NUM
            out.println("num is " + this.num.getNum());
            out.println();
            
            // DISPLAY THE MENU
            out.println("ENTER A SELECTION");
            out.println("1) Add a Transaction");
            out.println("2) Undo a Transaction");
            out.println("3) Redo a Transaction");
            out.println("4) Clear All Transactions");
            out.println("5) Reset Num and Transactions");
            out.print("-");

            // GET THE USER SELECTION
            let entry = this.input.nextLine();
            
            // ADD AND EXECUTE A TRANSACTION
            if (entry.startsWith("1")) {
                System.out.print("\nEnter an amount to add: ");
                entry = this.input.nextLine();
                let amountToAdd = Integer.parseInt(entry);
                var transaction = new AddToNum_Transaction(this.num, amountToAdd);
                this.tps.addTransaction(transaction);
            }            
            // UNDO A TRANSACTION
            else if (entry.startsWith("2")) {
                this.tps.undoTransaction();
            }
            // REDO A TRANSACTION
            else if (entry.startsWith("3")) {
                this.tps.doTransaction();
            }
            // CLEAR ALL TRANSACTIONS
            else if (entry.startsWith("4")) {
                this.tps.clearAllTransactions();
            }
            // CLEAR ALL TRANSACTIONS AND RESET NUM TO 0
            else if (entry.startsWith("5")) {
                this.tps.clearAllTransactions();
                this.num.setNum(0);
            }
            // QUIT
            else if (entry.startsWith("Q")) {
                this.keepGoing = false;
            }
        }
        console.log("GOODBYE");
    }
}

export default jsTPS_Tester