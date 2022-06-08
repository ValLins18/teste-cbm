import React from "react";
import GreyButton from "../Components/GreyButton";
import RedButton from "../Components/RedButton";
import './home.css'


export default () => {
    return(
        <div className="backplane">
                <img src="https://s3-alpha-sig.figma.com/img/50db/19d3/2798773366b8dd3757a5371c5815d1d2?Expires=1655078400&Signature=JzPoC7TzVRyvkiziMZpXnPKfIxkJ-pyn3Y8Bo4uFC4jYBaFsznWpPUJVoT~i0itHbFWXld3ZGDama~u8De-WhrLATk0acrNK-N9nlAmBV-heb-X1mhAjFElk~-7NlWTyE3BpPgf7i-XxkDt35uoKw~nOuCg1nEmquqqk8zD3EMENoT4~EWKtiCyPC9qd9au76nw-RKVhhLeWxvozBy2C7~DIy7pQLZGg8PV7iMQ8eDg92CoxcW1VCr~ZVnZ1vLrgrOmS3P-EpOajM3X7Jz~S-QGuQsnizqRaw4lSAnrl7UCZO~AJ8d6VGQ6RK9aXl6VykQoekIPnLyPbfR9NKrcZKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                <h2> Trabalhe Conosco</h2>
                <RedButton label="Cadastre-se"></RedButton>
                <GreyButton label="Ver Concorrentes"></GreyButton>
            </div>
    )
}