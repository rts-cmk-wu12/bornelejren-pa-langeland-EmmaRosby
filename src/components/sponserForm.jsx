import { useState } from 'react';

function SponserForm() {
    // Form state
    const [formData, setFormData] = useState({
        støttetype: 'Børnesponsorat',
        firmanavn: '',
        email: '',
        adresse: '',
        tlf: '',
        beløb: ''
    });

    // Error state
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error when field is edited
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        
        // Validate firmanavn
        if (!formData.firmanavn.trim()) {
            newErrors.firmanavn = 'Firmanavn er påkrævet';
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'E-mail er påkrævet';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Ugyldig e-mail format';
        }
        
        // Validate adresse
        if (!formData.adresse.trim()) {
            newErrors.adresse = 'Adresse er påkrævet';
        }
        
        // Validate tlf
        const phoneRegex = /^\d{8}$/;
        if (!formData.tlf.trim()) {
            newErrors.tlf = 'Telefonnummer er påkrævet';
        } else if (!phoneRegex.test(formData.tlf)) {
            newErrors.tlf = 'Telefonnummer skal bestå af 8 cifre';
        }
        
        // Validate beløb
        if (!formData.beløb.trim()) {
            newErrors.beløb = 'Beløb er påkrævet';
        } else {
            // Convert to number and check if it's a valid, positive number
            const numValue = Number(formData.beløb);
            if (isNaN(numValue) || numValue <= 0) {
                newErrors.beløb = 'Beløb skal være et positivt tal';
            }
        }
        
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length === 0) {
            // Form is valid - submit data
            console.log('Form submitted successfully:', formData);
            // Clear form and errors
            setFormData({
                støttetype: 'Børnesponsorat',
                firmanavn: '',
                email: '',
                adresse: '',
                tlf: '',
                beløb: ''
            });
            setErrors({});
            setIsSubmitted(true);
            // Reset submission message after 3 seconds
            setTimeout(() => setIsSubmitted(false), 3000);
        } else {
            // Form has errors
            setErrors(formErrors);
        }
    };

    return (  
        <>
        <form onSubmit={handleSubmit} className="sponser__form"> 
        {isSubmitted && (
            <div className="sponser__form__success">
                Tak for din støtte! <br />Vi kontakter dig snarest.
            </div>
        )}
            <div className="sponser__form__container">
                <label htmlFor="støttetype">Støttetype</label>
                <select 
                    name="støttetype" 
                    id="støttetype" 
                    value={formData.støttetype}
                    onChange={handleChange}
                >
                    <option value="Børnesponsorat">Børnesponsorat</option>
                    <option value="Lejrsponsorat">Lejrsponsorat</option>
                    <option value="Støtte til foreningen">Støtte til foreningen</option>
                </select>
            </div>
            <div className="sponser__form__container">
                <label htmlFor="firmanavn">Firmanavn</label>
                <input 
                    type="text" 
                    name="firmanavn" 
                    id="firmanavn" 
                    value={formData.firmanavn}
                    onChange={handleChange}
                    className={errors.firmanavn ? 'error' : ''}
                />
                {errors.firmanavn && <span className="error-message">{errors.firmanavn}</span>}
            </div>
            <div className="sponser__form__container">
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="sponser__form__container">
                <label htmlFor="adresse">Adresse</label>
                <input 
                    type="text" 
                    name="adresse" 
                    id="adresse" 
                    value={formData.adresse}
                    onChange={handleChange}
                    className={errors.adresse ? 'error' : ''}
                />
                {errors.adresse && <span className="error-message">{errors.adresse}</span>}
            </div>
            <div className="sponser__form__container">
                <label htmlFor="tlf">Tlf. nr.</label>
                <input 
                    type="tel" 
                    name="tlf" 
                    id="tlf" 
                    value={formData.tlf}
                    onChange={handleChange}
                    className={errors.tlf ? 'error' : ''}
                />
                {errors.tlf && <span className="error-message">{errors.tlf}</span>}
            </div>
            <div className="sponser__form__container">
                <label htmlFor="beløb">Beløb</label>
                <input 
                    type="number" 
                    name="beløb" 
                    id="beløb" 
                    min="0"
                    step="1"
                    value={formData.beløb}
                    onChange={handleChange}
                    className={errors.beløb ? 'error' : ''}
                />
                {errors.beløb && <span className="error-message">{errors.beløb}</span>}
            </div>
            <div className="sponser__form__submit">
                <button type="submit" className="submit-button">Doner</button>
            </div>
        </form>
        </>
    );
}

export default SponserForm;