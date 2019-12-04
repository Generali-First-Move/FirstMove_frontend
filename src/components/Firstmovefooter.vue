<template>
    <div id="footer">
        <footer>
            <div class="row justify-content-center">
                    <div class="col-md-5 text-center">
                        <strong>Dieses Portal ist in Zusammenarbeit mit der Generali Deutschland Informatik Services GmbH entstanden </strong>
                        <br>
                        <a href="https://www.generali.de/ueber-generali/ueber-uns/"><img src="@/assets/generali.png" alt="Bild" width="90" height="70"/></a>
                        <br>
                        <br>
                        <strong class="text-uppercase">Soziale Netzwerke</strong>
                        <br>
                        <a href="https://www.facebook.com/Generali.Informatik/" target="_blank"><i class="fab fa-facebook-square"></i> </a>
                        <a href="https://twitter.com/generaligdis?lang=de" target="_blank"><i class="fab fa-twitter-square"></i> </a>
                        <a href="https://www.instagram.com/generaliinformatik/?hl=de" target="_blank"><i class="fab fa-instagram"></i> </a>
                    </div>
                <hr class="socket">
                <p>&copy; First Move Theme</p>
            </div>
        </footer>
    </div>

</template>

<script>
    export default {
        name: "Firstmovefooter"
    }
</script>

<style>
    footer{
        background-color: #424242;
        color: #ffffff;
        padding: 2rem 0 2rem;
        margin-top: 1rem;
        width: 100%;
        position: relative;
    }
    footer img{
        margin: 1.5rem 0;
    }

    footer a{
        color: white;
    }

    footer svg.svg-inline--fa{
       font-size: 1.6rem;
        margin: 1.2rem .5rem 0 0;
    }

    footer svg.svg-inline--fa:hover{
        color: #c5281c;
    }

    hr.socket{
        width: 100%;
        border-top: .2rem solid #666b71;
        margin-top: 3rem;
    }

    footer p{
        position: relative;
        top: 25px;
        left: 8px;
    }

</style>