console.log("este codigo esta en index dentro de la carpeta de src")

import funcionSaludar from './funcionSaludar';
import ComponenteSubtitulo from './ComponenteSubtitulo';
import ComponenteParrafo from './ComponenteParrafo';
import './styles.css';

//ejecutamos codigo de valores importados

funcionSaludar('alumnos de la generaacion 21')
document.body.appendChild(ComponenteSubtitulo());
document.body.appendChild(ComponenteParrafo());

