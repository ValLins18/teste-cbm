import React, { Component } from "react";
import './DadosPessoais.css';
import '../Components/Buttons.css'
import GreyButton from "../Components/GreyButton";
import RedButton from "../Components/RedButton";
import Input from "../Components/Input";

export default class DadosPessoais extends Component {
    render(){
        return(
            <div className="backplane">
                <div className="steps">
                    <div className="ativo step">
                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.08333 49C4.08333 49 0 49 0 44.9167C0 40.8333 4.08333 28.5833 24.5 28.5833C44.9167 28.5833 49 40.8333 49 44.9167C49 49 44.9167 49 44.9167 49H4.08333ZM24.5 24.5C27.7489 24.5 30.8647 23.2094 33.1621 20.9121C35.4594 18.6147 36.75 15.4989 36.75 12.25C36.75 9.0011 35.4594 5.88526 33.1621 3.58794C30.8647 1.29062 27.7489 0 24.5 0C21.2511 0 18.1353 1.29062 15.8379 3.58794C13.5406 5.88526 12.25 9.0011 12.25 12.25C12.25 15.4989 13.5406 18.6147 15.8379 20.9121C18.1353 23.2094 21.2511 24.5 24.5 24.5Z" fill="white"/>
                        </svg>
                    </div>
                        <div className="linha desativado"></div>
                        <div className="step desativado">
                            <svg width="45" height="55" viewBox="0 0 45 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.6302 5.47225H29.5658C29.0638 4.01463 28.1271 2.74589 26.8819 1.83699C25.6367 0.928085 24.1429 0.422695 22.6016 0.388916C21.0756 0.442049 19.6015 0.956186 18.3735 1.8636C17.1454 2.77102 16.2211 4.02914 15.7222 5.47225H3.86106C3.44609 5.41223 3.02312 5.4409 2.62005 5.55635C2.21698 5.67181 1.84297 5.87143 1.52272 6.14205C1.20246 6.41267 0.943237 6.74812 0.762148 7.12628C0.58106 7.50444 0.482225 7.9167 0.472168 8.33586V51.7475C0.474387 52.1258 0.551094 52.4999 0.697909 52.8486C0.844724 53.1972 1.05877 53.5135 1.32783 53.7794C1.59689 54.0454 1.91569 54.2557 2.26603 54.3984C2.61637 54.5411 2.99139 54.6134 3.36967 54.6111H41.6302C42.0085 54.6134 42.3835 54.5411 42.7339 54.3984C43.0842 54.2557 43.403 54.0454 43.6721 53.7794C43.9411 53.5135 44.1552 53.1972 44.302 52.8486C44.4488 52.4999 44.5255 52.1258 44.5277 51.7475V8.33586C44.5255 7.95758 44.4488 7.58344 44.302 7.2348C44.1552 6.88617 43.9411 6.56986 43.6721 6.30395C43.403 6.03804 43.0842 5.82772 42.7339 5.68502C42.3835 5.54232 42.0085 5.47002 41.6302 5.47225ZM11.1302 10.5556C11.1302 10.1062 11.3087 9.6752 11.6265 9.35743C11.9443 9.03966 12.3753 8.86114 12.8247 8.86114H18.6536V7.69197C18.6536 7.17684 18.755 6.66676 18.9522 6.19084C19.1493 5.71493 19.4382 5.2825 19.8025 4.91825C20.1667 4.554 20.5992 4.26506 21.0751 4.06793C21.551 3.87079 22.0611 3.76933 22.5762 3.76933C23.0913 3.76933 23.6014 3.87079 24.0773 4.06793C24.5532 4.26506 24.9857 4.554 25.3499 4.91825C25.7142 5.2825 26.0031 5.71493 26.2002 6.19084C26.3974 6.66676 26.4988 7.17684 26.4988 7.69197V8.86114H32.3277C32.7771 8.86114 33.2081 9.03966 33.5259 9.35743C33.8436 9.6752 34.0222 10.1062 34.0222 10.5556V13.9445H11.1641L11.1302 10.5556ZM34.3611 44.4445H10.6388V41.0556H34.3611V44.4445ZM34.3611 37.6667H10.6388V34.2778H34.3611V37.6667ZM34.3611 30.8889H10.6388V27.5H34.3611V30.8889ZM34.3611 24.1111H10.6388V20.7222H34.3611V24.1111Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="linha desativado"></div>
                        <div className="step desativado">
                            <svg width="66" height="53" viewBox="0 0 66 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.7 16.5625C29.7 22.0613 25.278 26.5 19.8 26.5C14.322 26.5 9.9 22.0613 9.9 16.5625C9.9 11.0638 14.322 6.625 19.8 6.625C25.278 6.625 29.7 11.0638 29.7 16.5625ZM39.6 53H0V46.375C0 39.0544 8.877 33.125 19.8 33.125C30.723 33.125 39.6 39.0544 39.6 46.375V53ZM66 26.5V33.125H36.3V26.5H66ZM66 13.25V19.875H36.3V13.25H66ZM66 0V6.625H36.3V0H66Z" fill="white"/>
                            </svg>
                        </div>
                </div>
                <h2>Dados Pessoais</h2>
                <form className="inputs-form" action="">
                <label htmlFor="nome" id="nome" >
                    Nome:<br/>
                    <Input className="nome" type="text" name="nome"/>
                </label>
                <label htmlFor="cpf">
                    CPF:<br/>
                    <Input type="text" name="cpf"/>
                </label>
                <label htmlFor="data">
                    Data de Nascimento:<br/>
                    <Input type="text" name="data"/>
                </label>
                <label htmlFor="signo">
                    Signo:<br/>
                    <Input type="text" name="signo"/>
                </label>
                <label htmlFor="sangue">
                    Tipo Sanguineo:<br/>
                    <Input type="text" name="sangue"/>
                </label>
                <label htmlFor="email">
                    E-mail:<br/>
                    <Input type="text" name="email"/>
                </label>
                <label htmlFor="telefone">
                    telefone:<br/>
                    <Input type="text" name="telefone"/>
                </label>
                </form>
                <footer>
                    <GreyButton className="grey animado small-button" label="Voltar"/>
                    <RedButton className="red animado small-button" label="Proximo"/>
                </footer>
            </div>
        )

    }
}
