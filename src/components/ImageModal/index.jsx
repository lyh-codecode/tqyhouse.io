import './style.css'

export default function ImageModal({ isOpen, imageUrl, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <img src={imageUrl} alt="查看大图" onClick={e => e.stopPropagation()} />
                <button className="modal-close" onClick={onClose}>×</button>
            </div>
        </div>
    )
} 