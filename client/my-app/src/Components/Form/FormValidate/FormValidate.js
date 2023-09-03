    export const validation=(form)=>{
    const{ name,
    height_metric_min,
    height_metric_max,
    weight_metric_min,
    weight_metric_max,
    life_span_years_min,
    life_span_years_max,
    image}=form;

    const newErrors={}

    const regexName= /^[a-zA-Z\s]*$/;
    const regexImage = /^(https?:\/\/)?[^"']*\.(?:png|jpg|jpeg|gif|png|svg)$/;





    
    switch (true) {
        case (!regexName.test(name)):newErrors.name="Por favor ingrese un nombre valido"
        break;
        case(height_metric_min>height_metric_max):newErrors.height="Altura minima no puede ser mayor al maximo o viceversa"
        break
        case(weight_metric_min>weight_metric_max):newErrors.weight="El peso minimo no puede ser mayor al maximo o viceversa"
        break;
        case(life_span_years_min>life_span_years_max):newErrors.life_span_years="El año minimo de vida no puede ser mayor al maximo"
        break;
        case(!Number.isInteger(life_span_years_max)&& !Number.isInteger(life_span_years_min)):newErrors.life_span_years="Por favor ingrese datos enteros"
        break;
        case(!image):newErrors.image="Este campo no debe estar vacio"
        break;
        case(!regexImage.test(image)):newErrors.image="Por favor ingrese una URL valida"
        break;
        default:
            break;
    }
 
        return newErrors;

};

