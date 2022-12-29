import Button from "./event/Button";

function Evento() {
    function meuEvento() {
        console.log("Ativado!")
    }

    function segundoEvento() {
        console.log("Ativado Segundo Evento!")
    }

    return (
        <div>
            <p>Clique para disparar o evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />

        </div>
    )
}

export default Evento;