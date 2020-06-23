
function tipAmount(bill, service)
{
    if(service == 'good')
    {
        tip = bill*0.2
    }
    else if(service == 'fair')
    {
        tip = bill*0.15
    }
    else if(service == 'bad')
    {
        tip = bill*0.1
    }

    return tip;
}

function totalAmt(bill, service)
{
    tip = tipAmount(bill,service);
    total = bill + tip;
    return total;
}

result = totalAmt(210, 'fair');
console.log(result);
