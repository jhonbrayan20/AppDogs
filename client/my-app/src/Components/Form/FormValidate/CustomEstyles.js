 export const customStyles = {
    multiValue: (provided) => ({
        ...provided,
        fontSize: '12px', // Ajusta el tamaño de fuente
        backgroundColor: '#FF9741', // Color de fondo
        color: 'white', // Color de texto
        borderRadius: '4px', // Borde de las cajas
        height: '58px',
        maxWidth: '200px', // Establece un ancho máximo para el MultiValue
        overflow: 'hidden', // Controla el desbordamiento
        whiteSpace: 'nowrap', // Evita el salto de línea de los elementos seleccionados
        textOverflow: 'ellipsis', // Añade puntos suspensivos si se desbordan
      }),
      multiValueLabel: (provided) => ({
        ...provided,
        color: 'white', // Color de texto del label
      }),
      multiValueRemove: (provided) => ({
        ...provided,
        color: 'white', // Color de texto del botón de eliminar
        ':hover': {
          backgroundColor: 'red', // Color de fondo del botón de eliminar al pasar el cursor
        },
      }),
  };