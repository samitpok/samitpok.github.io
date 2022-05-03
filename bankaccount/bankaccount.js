
class Account{

    #accountName;

    #balance;

    constructor(accountName,balance){
        this.#accountName = accountName;
        this.#balance = balance;
    }

    getAccountName(){
        return this.#accountName;
    }

    getBalance(){
        return this.#balance;
    }

    addDeposit(deposit){
        this.#balance = parseInt(this.#balance) + parseInt(deposit);
    }

    reduceDebit(debit){
        if(parseInt(debit) <= parseInt(this.#balance))
            this.#balance = parseInt(this.#balance) - parseInt(debit);
    }

}



class BankAccountApplication {
    
    static accountInfoList = [];

    constructor(){
        this.accountInfoList = [];
    }

    createAccount(accountName, deposit){
        var account = new Account(accountName,deposit);
        this.accountInfoList.push(account);
    }

    displayList() {

        var info="";
        for(let i=0;i< this.accountInfoList.length;i++){
            info+= "Account name: "+ this.accountInfoList[i].getAccountName() + "    Balance: "+this.accountInfoList[i].getBalance() +"\n";
        }
        return info;

    }

}

const app = new BankAccountApplication();


function createAccount(){
    
    let accountName = document.getElementById("accountName").value ;
    let deposit = document.getElementById("deposit").value ;

    app.createAccount(accountName,deposit);
    app.displayList();
    document.getElementById("textareacontent").value = app.displayList();
}

function showDepositSection(){
    document.getElementById("accountName").value ="";
    document.getElementById("deposit").value ="";
    document.getElementById("create-account-section").style.display= 'none';
    document.getElementById("deposit-section").style.display= 'block';
    

    var selectBox = document.getElementById('acct_type');
    //console.log("aacount list",app.accountInfoList);
    for(var i = 0; i < app.accountInfoList.length; i++){
        var option = app.accountInfoList[i];
        //console.log("$$$"+option.accountName);
        selectBox.options.add( new Option(option.getAccountName(), option.getAccountName(), false) );
    }
}


function addDepositToAccount(){
    let depositAmount = document.getElementById("extraDeposit").value;
    let accountType = document.getElementById("acct_type").value; 
    console.log("deposit amount",depositAmount);
    console.log("account type",accountType);
    for(var i = 0; i < app.accountInfoList.length; i++){
        if(accountType == app.accountInfoList[i].getAccountName()){
            app.accountInfoList[i].addDeposit(depositAmount);
            break;
        }
        
    }
    document.getElementById("create-account-section").style.display= 'block';
    document.getElementById("deposit-section").style.display= 'none';
    document.getElementById("textareacontent").value = app.displayList();

}


function showDebitSection(){
    document.getElementById("accountName").value ="";
    document.getElementById("deposit").value ="";
    document.getElementById("create-account-section").style.display= 'none';
    document.getElementById("debit-section").style.display= 'block';
    

    var selectBox = document.getElementById('acct_type_deb');
    console.log("aacount list",app.accountInfoList);
    for(var i = 0; i < app.accountInfoList.length; i++){
        var option = app.accountInfoList[i];
        //console.log("$$$"+option.accountName);
        selectBox.options.add( new Option(option.getAccountName(), option.getAccountName(), false) );
    }
}

function reduceDebitFromAccount(){
    let debitAmount = document.getElementById("debitAmount").value;
    let accountType = document.getElementById("acct_type_deb").value; 
    console.log("deposit amount",debitAmount);
    console.log("account type",accountType);
    for(var i = 0; i < app.accountInfoList.length; i++){
        if(accountType == app.accountInfoList[i].getAccountName()){
            app.accountInfoList[i].reduceDebit(debitAmount);
            break;
        }
        
    }
    document.getElementById("create-account-section").style.display= 'block';
    document.getElementById("debit-section").style.display= 'none';
    document.getElementById("textareacontent").value = app.displayList();

}

window.onload = function(){
    
    document.getElementById("createAccount").onclick = createAccount;
    document.getElementById("depositAmount").onclick = showDepositSection;
    document.getElementById("submitExtraDeposit").onclick = addDepositToAccount;
    document.getElementById("debit").onclick = showDebitSection;
    document.getElementById("submitDebit").onclick = reduceDebitFromAccount;
   
};

