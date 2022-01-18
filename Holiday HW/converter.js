function  LengthConverter(valNum) {

    document.getElementById("outputcm").innerHTML=valNum/0.01;
    document.getElementById("outputKilometers").innerHTML=valNum/1000;
    document.getElementById("outputdc").innerHTML=valNum/0.1;
    document.getElementById("outputmm").innerHTML=valNum/0.001;
    document.getElementById("outputFeet").innerHTML=valNum*3.2808;
    document.getElementById("outputInches").innerHTML=valNum*39.370;

}

