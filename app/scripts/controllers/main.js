'use strict';

/**
 * @ngdoc function
 * @name chartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chartApp
 */
angular.module('chartApp')
  .controller('MainCtrl', function ($scope) {

    var totalAmenities = ["Pool", "Air conditioner", "Laundry Room", "Dishwasher","Garage"];

    var amenities = [["Pool", "Air conditioner", "Laundry Room", "Dishwasher","Garage"],
      ["Air conditioner","Pool"]];

    var chart1 = {};
    chart1.type = "LineChart";
    chart1.data = [
      ['Component', 'cost'],
      ['Title', 50000],
      ['Title', 80000]
    ];

    $scope.class = "label-default"

    chart1.options = {
      displayExactValues: true,
      width: "100%",
      height: 200,
      is3D: true,
      chartArea: {left:10,top:10,bottom:0,height:"100%"}
    };

    chart1.formatters = {
      number : [{
        columnNum: 1,
        pattern: "$ #,##0.00"
      }]
    };

    $scope.myObj = [];
    $scope.myObjOver = [];

    $scope.chart = chart1;

    $scope.newItem = function(){
      chart1.data.push(['Title',Math.random()*100000]);
      console.log(1+Math.random()*10/2);
      var rand = shuffle(totalAmenities.slice(Math.random()*10/2));
      amenities.push(rand);
    }

    $scope.selectHandler = function(selectedItem){
      if(selectedItem){
        $scope.myObj =amenities[selectedItem.row];
      }else{
        $scope.myObj = [];
      }
    }

    $scope.mouseoverHandler = function (row, column){
      console.log("over");
      $scope.myObjOver =amenities[row];
    }
    $scope.mouseoutHandler = function (row, column){
      console.log("over");
      $scope.myObjOver =[];
    }

    function select(row,object){
      console.log(chart1.data[row+1]);
      object = amenities[row];
      console.log(object);
    }

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }


  });
