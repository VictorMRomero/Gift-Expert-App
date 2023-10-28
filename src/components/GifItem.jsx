import PropTypes from 'prop-types';

export const GiftItem = ({title, url}) => {


    return <>
        <div className="card">  
            <img src = {url}></img>
            <p>{title}</p>
        </div>
    </>
}

GiftItem.propTypes = {
    title: PropTypes.string.isRequired, // Define el tipo de 'category' y si es requerido
    url: PropTypes.string.isRequired,
};