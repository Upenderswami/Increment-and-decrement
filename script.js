var data=0
    function incre()
    {
        data=data+1
        var cvalue=document.getElementById('num')
        cvalue.innerHTML=data
    }
    function decre()
    {
        if(data<=0)
        {
            alert('Negetive Value Are Not allowed')
        }
        else
        {
            data=data-1
        var cvalue=document.getElementById('num')
        cvalue.innerHTML=data  
        }

    }
    function rese()
    {
        data=0
        var cvalue=document.getElementById('num')
        cvalue.innerHTML=data
    }

