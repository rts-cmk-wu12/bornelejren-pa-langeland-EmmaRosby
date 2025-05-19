import { useState } from 'react';

function SponserForm() {
    // Form state
    const [formData, setFormData] = useState({
        støttetype: 'Børnesponsorat',
        company: '',
        email: '',
        adress: '',
        tlf: '',
        amount: ''
    });

    // Error state
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'støttetype') {
            // Adjust amount based on støttetype if needed
            let newamount = formData.amount;

            if (value === 'Børnesponsorat' && (Number(formData.amount) < 4000 || formData.amount === '')) {
                newamount = '4000';
            } else if (value === 'Lejrsponsorat' && (Number(formData.amount) < 2000 || formData.amount === '')) {
                newamount = '2000';
            }

            setFormData({
                ...formData,
                [name]: value,
                amount: newamount
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }

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

        // Validate company
        if (!formData.company.trim()) {
            newErrors.company = 'Firmanavn er påkrævet';
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'E-mail er påkrævet';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Ugyldig e-mail format';
        }

        // Validate adress
        if (!formData.adress.trim()) {
            newErrors.adress = 'Adresse er påkrævet';
        }

        // Validate tlf
        const phoneRegex = /^\d{8}$/;
        if (!formData.tlf.trim()) {
            newErrors.tlf = 'Telefonnummer er påkrævet';
        } else if (!phoneRegex.test(formData.tlf)) {
            newErrors.tlf = 'Telefonnummer skal bestå af 8 cifre';
        }

        // Validate amount
        if (!formData.amount.trim()) {
            newErrors.amount = 'amount er påkrævet';
        } else {
            // Convert to number and check if it's a valid, positive number
            const numValue = Number(formData.amount);
            if (isNaN(numValue) || numValue <= 0) {
                newErrors.amount = 'amount skal være et positivt tal';
            } else if (formData.støttetype === 'Børnesponsorat' && numValue < 4000) {
                newErrors.amount = 'Børnesponsorat kræver minimum 4000 kr.';
            } else if (formData.støttetype === 'Lejrsponsorat' && numValue < 2000) {
                newErrors.amount = 'Lejrsponsorat kræver minimum 2000 kr.';
            }
        }

        return newErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            try {
                // Add current year to the form data
                const sponsorData = {
                    ...formData,
                    year: new Date().getFullYear()
                };

                // Make API request to your server
                const response = await fetch(`${import.meta.env.VITE_URL}/api/sponsers`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sponsorData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Clear form and errors
                setFormData({
                    støttetype: 'Børnesponsorat',
                    company: '',
                    email: '',
                    adress: '',
                    tlf: '',
                    amount: ''
                });
                setErrors({});
                setIsSubmitted(true);
                // Reset submission message after 3 seconds
                setTimeout(() => setIsSubmitted(false), 3000);
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Der opstod en fejl ved afsendelse af formularen. Prøv igen senere.');
            }
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
                    <label htmlFor="company">Firmanavn</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={errors.company ? 'error' : ''}
                    />
                    {errors.company && <span className="error-message">{errors.company}</span>}
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
                    <label htmlFor="adress">Adresse</label>
                    <input
                        type="text"
                        name="adress"
                        id="adress"
                        value={formData.adress}
                        onChange={handleChange}
                        className={errors.adress ? 'error' : ''}
                    />
                    {errors.adress && <span className="error-message">{errors.adress}</span>}
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
                    <label htmlFor="amount">Beløb</label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        min={formData.støttetype === 'Børnesponsorat' ? "4000" :
                            formData.støttetype === 'Lejrsponsorat' ? "2000" : "0"}
                        step="1"
                        value={formData.amount}
                        onChange={handleChange}
                        className={errors.amount ? 'error' : ''}
                    />
                    {errors.amount && <span className="error-message">{errors.amount}</span>}
                </div>
                <div className="sponser__form__submit">
                    <button type="submit" className="submit-button">Donér</button>
                </div>
            </form>
        </>
    );
}

export default SponserForm;