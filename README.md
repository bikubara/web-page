<!DOCTYPE html>
<html>
<head>
    <title>time table</title>
</head>

<link rel="stylesheet" href="style.css">

<script src="script.js">

  


</script>

<script>
var function go() {
        alert("hello world");
}
</script>


hhhhhhh

hhhhhhhhhhhhhh
<body onload="run(),hex(),pet(),di()">
   bara

    <center><h2>
        <div id="header1">
            routine
        </div>
    </h2></center>


    <!--1st container-->

    <div id="card">
        <tag>C:1</tag>
        <center>
            <b>TODAY: </b><tody id="tody"></tody><br />
            <b>days spent : </b><p0 id="ded"></p0><br>
            <b>training days left : </b><g id="Tdays"></g><br>
            <b>working days left : </b><g id="Wdays"></g><br>
            <font size="1px">
                NOTE :: total training days: 128 /
                total working days: 169/ started:06/12/21<br>
            </font>
        </center>
    </div>
    <hr>
    <!--2nd container-->

    <div id="card1">
        <tag>C:2</tag>
        <center><b>Total Sessions</b></center>
        <b>S1</b>:06 dec 21 -- 3 jan 22 || 28 days <br>
        <b>S2</b>:06 dec 21 -- 3 jan 22 || 28 days<br>
        <b>S3</b>:06 dec 21 -- 3 jan 22 || 28
        days<br>

    </div>

    <!--3rd container-->

    <script>
        //function to return current time
        setInterval(pet, 1000);
        function pet() {
            var today = new Date();
            var h,
            m,
            s;
            h = today.getHours();
            m = today.getMinutes();
            s = today.getSeconds();
            var today_time = h+":"+m+":"+s;
            var g = document.getElementById("c_time");
            g.innerHTML = today_time;
            g.style.color = "#0000f5";
        }
    </script>

    <center>
        <div id="card">
            <tag>C:3</tag>
            <b>Time :</b>
            <b>
                <span id="c_time">
                </span>
            </b>
        </div>
    </center>

    <!--4rd container-->

    <div id="card">
        <tag>C:4</tag>
        <b><center>TIME-TABLE ROUTINE TODAY</center></b>
        <hr>
        <b>Today:</b> <p1 id="p1"></p1><br>
        <b>Current class:</b><p1 id="c_class"></p1><br>
        <b>Next class:</b><p1 id="n_class"></p1><br>

        <hr>
        1<sup>st</sup> <span id="time">| 5:00-6:00AM | </span><p2 id="p2"></p2><br>
        2<sup>nd</sup> <span id="time">| 5:00-6:00AM | </span> <p3 id="p3"></p3><br>
        3<sup>rd</sup> <span id="time">| 5:00-6:00AM | </span> <p4 id="p4"></p4><br>
        4<sup>th</sup> <span id="time">| 5:00-6:00AM | </span> <p5 id="p5"></p5><br>
        5<sup>th</sup> <span id="time">| 5:00-6:00AM | </span> <p6 id="p6"></p6><br>
        6<sup>th</sup> <span id="time">| 5:00-6:00AM | </span> <p7 id="p7"></p7><br>
        <strike>markup:</strike><p0> 6:00:AM</p0><br>
        <strike>markup:</strike> 2:30:PM<br>
        <strike>markup:</strike> 6:30:PM<br>
        <font size="1px">
            <b>NOTE: markup means attendance and you have to be present there physically soilders may know
            </b>
        </font>
    </div>

    <!--5th container-->


    <div id="card">
        <tag>C:5</tag>
        <center> <b>training duration schedule</b></center>
        <hr>
        <b>started on date:</b> <p0 id="sdays">
        </p0><br>
        <b>training days over date:</b><p0 id="tdays">
        </p0><br>
        <b>working days over date:</b> <p0 id="wdays">
        </p0><br>
        <font size="1px">
            NOTE: sundays and central holidays will not be counted as training days
        </font>
    </div>
    <div id="console1">

    </div>

    <button onclick="go()">test</button>

</body>
</html>
