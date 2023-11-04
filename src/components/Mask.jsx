import '../styles/mask.css';

export default function Mask({ isState }) {
    return (
        <div className={`mask ${isState ? 'mask--visible' : ''}`}></div>
    )
}