import PropTypes from 'prop-types';

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

// Definindo os tipos de dados das propriedades para um programador
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "Marca não informada",
    ano_lancamento: 0,
}

export default Item;