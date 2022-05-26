//alert("😇👻please dont forget to upvote❤️😇");

//alert("please read the next instruction carefully to understand better about this project");

//alert("this website gives mine personal timetable and shows my daily routine as i am a training candidate this also helped me in calculating my training days as it was a time taking work that has been made easier through this code hope you like it ");



function hex(){
        //month wise declaration
        const mon=["January","Feburaury","March","April","May","June","July","August","September","October","November","December"];
        
        const day=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
        
        //training days left
        
        var m,y,d,w;
        var today=new Date();
        d=today.getDate();
        m=today.getMonth();
        y=today.getFullYear();
        w=today.getDay();
        //alert(h);
        
        var format=day[w]+", "+mon[m]+" "+d+", "+ y;
        document.getElementById("tody").innerHTML=format;
        
        //time here
        
        
    }
 


function run(){
        const mon=["January","Feburaury","March","April","May","June","July","August","September","October","November","December"];
        
        var m,y,d,t,w,d1,m1,y1,d0,m0,y0,d2,m2,y2,d5,m5,y5;
        var oneday=24*60*60*1000;
        
        //start days constant days
        var sdays=new Date();
        d2=sdays.getDate(sdays.setDate(6));
        m2=sdays.getMonth(sdays.setMonth(11));
        y2=sdays.getFullYear(sdays.setFullYear(2021));
        var format2=mon[m2]+" "+d2+", "+y2;;
        
        
        //training days= sdays-today
        
        var today=new Date();
        d0=today.getDate();
        m0=today.getMonth();
        y0=today.getFullYear();
        var today_fmt=mon[m0]+" "+d0+", "+y0;
        
        
        
        //training days left
        var tdays=new Date();
        tdays.setDate(tdays.getDate()+128);
        d=tdays.getDate();
        m=tdays.getMonth();
        y=tdays.getFullYear();
        var format=mon[m]+" "+d+", "+y;
        
        
        
        
        
        
        //working days left
        var wdays=new Date();
        wdays.setDate(wdays.getDate()+169);
        d1=wdays.getDate();
        m1=wdays.getMonth();
        y1=wdays.getFullYear();
        var wdays_fmt=mon[m1]+" "+d1+", "+y1;
        
        
        
        //deduction
        
        //hours*minutes*seconds*milliseconds
        var ded=new Date();//exp
        d5=ded.getDate();
        m5=ded.getMonth();
        y5=ded.getFullYear();
        //var d=ded.getDate(ded.setDate(9)-ded.getDate())
        
        var days_spent=(ded-sdays)/oneday;
        
        
        
        var tdays_left=((tdays-today)/oneday)-days_spent;
        var wdays_left=((wdays-today)/oneday)-days_spent;
        
        //sessions
        
        
        
        //routine data here date wise ADD HERE
        //you can add here
        
        const route={date:Date(),p1:"PT(Physical training)",p2:"parade",p3:"law class",p4:"crpc",p5:"parade",p6:"game"};
        
        
        //seperate time table
        
        const dys={0:"mon",1:"tue",2:"wed",3:"thu",4:"fri",5:"sat",6:"sun"};
        
        //format in return innerHTML 
        
        document.getElementById("Tdays").innerHTML=tdays_left;
        document.getElementById("Wdays").innerHTML=wdays_left;
        
        document.getElementById("p1").innerHTML=today_fmt;
        document.getElementById("p2").innerHTML=route.p1;
        document.getElementById("p3").innerHTML=route.p2;
        document.getElementById("p4").innerHTML=route.p3;
        document.getElementById("p5").innerHTML=route.p4;
        document.getElementById("p6").innerHTML=route.p5;
        document.getElementById("p7").innerHTML=route.p6;
        
        document.getElementById("sdays").innerHTML=format2;
        document.getElementById("tdays").innerHTML=format;
        document.getElementById("wdays").innerHTML=wdays_fmt;
        document.getElementById("ded").innerHTML=days_spent;
    }
    
   
    // function to return 
    //current class and 
    //next class in container 4
function di() {
        
    /*--------------------------------------------------------------*/
    //                 EXPERIMENT BELOW with week days
    /*--------------------------------------------------------------*/
  
        var c_date= new Date();
        var c_hours=c_date.getHours();

        switch(c_date.getDay()){
        case 1:
                day="monday";
                break;

        case 2:
                day="tuesday";
                break;

        case 3:
                day="wednesday";
                break;

        case 4:
                day="thursday";
            
                break;

        case 5:
                day="friday";
                break;

        case 6:
                day="saturday";
                break;

        case 7:
                day="sunday";
                break;

        }

    /*----------------------------------------------------------------*/
    //                     MAIN STARTS HERE BELOW
    /*----------------------------------------------------------------*/

    //setting hours to case 
    //0,1,2,3,4,5,6 for switch statement below 
    //to form 6 periods duration
    if(c_hours<=6){
        p=1;
        n=2;
    }
    else if(c_hours<=7){
        p=2;
        n=3;
    }
    else if(c_hours<=8){
        p=3;
        n=4;
    }
    else if(c_hours<=12){
        p=4;
        n=5;
    }
    else if(c_hours<=15){
        p=5;
        n=6;
    }
    else if(c_hours<=16){
        p=6;
        n=0;
    }
    else{
        p=0;
        n=1;
    }



        //function
        //taking INPUT in parenthesis  to be used below in section 3
        //returning the (period)CLASS according to the format specified
        function swt(n1){

                //period cases
                //used to display databas4
                //returns period
                switch(n1){
                
                    case 1:
                        period="first period";
                        break;
                        
                    case 2:
                        period="second period";
                        break;

                    case 3:
                        period="third period";
                        break;

                    case 4:
                        period="fourth period";
                        break;

                    case 5:
                        period="fifth period";
                        break;

                    case 6:
                        period="sixth period";
                        break;

                    case 0:
                        period="REST TIME";
                        break;
                }

            return period;
        }

    /*------------------------------------------------------------------*/
    //                              secton 3
    /*-------------------------------------------------------------------*/

    c_class=swt(p);
    n_class=swt(n);

    
    /*---------------------------------------------------------------------*/
    //                  OUTPUTS TO THEIR RESPECTIVE PLACES
    /*---------------------------------------------------------------------*/

    //to console
    document.getElementById("console1").innerHTML=day+""+c_hours+" "+p+" "+period;
    
    //to current class going
    document.getElementById("c_class").innerHTML=" "+c_class;
    
    //to next class that will be
    document.getElementById("n_class").innerHTML=" "+n_class;
}  
    