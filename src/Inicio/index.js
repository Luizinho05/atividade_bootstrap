import MarioWorld from '../assets/mario_world.png'
import './inicio.index.css'

export default function Inicio() {
    return (
        <div className='containerIniGeral'>
            <div className='row'>
                <div class="col-6">
                   <img src={MarioWorld} alt={MarioWorld} className='img-fluid' />
                </div>
                <div class="col-2">
                   <h1>Coluna 2 Mario World vem do nintendo</h1>
                </div>
                <div class='col coluna3'>
                   <h1>Coluna 3 Luighi é seu irmão e yoshi é pet de estimação da familia</h1>
                </div>
            </div>
        </div>
    )
}