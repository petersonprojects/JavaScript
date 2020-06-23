
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

result = tipAmount(200, 'fair');
console.log(result);
