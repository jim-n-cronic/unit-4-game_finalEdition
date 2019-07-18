#############################################
###~~~Instructions for starWarsRPG-game~~~###
#############################################
~~~~~~~~~~~//~~~~~~~~~~~~
~~~ <htmlIntstructions> ~~~
~~~~~~~~~~~//~~~~~~~~~~~~

let instructions = [1,2,3,4,5]



<body>

>>> FORGE userPlayer <div>  (instructions[1]) =>

<div id="firstScreen" class="container-fluid">
    <img class="img-fluid" src="___insert___.png" alt="starWarsLogo" />
    <br>
    <br>
    <h1>Who will restore order to the galaxy?!</h1>
    <br>
    <div id="game" class="ctr container card-deck">
    </div>
</div>

>>> FORGE mainGameScreen <div> (instructions[2]) =>

<div id="secondScreen" class="bg-trans container-fluid animate slideInDown">
    <div class="row">
        <div class="col-12-ctr">
            Opponents Remaining:
            <div id="opponentsLeftDiv"></div>
        </div>    
    </div>

<div class="row text-center paddingTop">
    <div class="col-5">
        Player:
        <div class="container" stype="width: 30%;">
            <div id="playerDiv"></div>
            <div id="playerHealthDiv"></div>
        </div>
    </div>
</div>

>>> V.S. <div> (instructions[3]) =>

<div class="col-2 paddingTop">
    <img src="___insert___" alt="V.S." width="100"/>
</div>
<div class="col-5">
    Enemy:
    <div class="container">
        <div id="opponentDiv"></div>
        <div id="opponentHealthDiv"></div>
    </div>
</div>

>>> FORGE buttonHolder <div> (instructions[4]) =>

<div class="row">
    <div class="col-12 btn">
        <div id="msg"></div>
        <br>
        <button type="button" name="attack" id="attackBtn" class="btn btn-dark btn-lg">ATTACK!</button>
    </div>
</div>

</div>
<div class="container-fluid">
    <div id="globalMsg" class="animated fadeInUp">
        <p class="shadow">
            CONGRADULATIONS!!
                <br> You have restored order to the galaxy, my young Sachauan! 
        </p>
    </div>            
</div>

>>> INSERT javaScriptLinkFiles! (instructions[5]) =>

# jQuery CDN #
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

^^^^^^^^^^^^^^^
# ?(cdnjs_AJAX_popper)? #
^^^^^^^^^^^^^^^^
# bootStrap CDN (maxCDN) #

> | VVVVVVVVVVV |
## myScript.js ##


</body>

</html>



~~~~~~~~~~~~~~//~~~~~~~~~~~~~~~~~
~~~ <javaScriptIntructions> ~~~
~~~~~~~~~~~~~~//~~~~~~~~~~~~~~~~~

