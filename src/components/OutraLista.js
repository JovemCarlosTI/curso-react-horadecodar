function OutraLista({ itens }) {
    return (
        <>
            <h3>Minha lista</h3>
            <ul>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))) : (
                <p>Não há itens na lista</p>
                )
            }
            </ul>

        </>
    )
}

export default OutraLista;