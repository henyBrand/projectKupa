import "./singleFamily.css"
const SingleFamily = () => {
    const family = {}
    return (
        <div className="single-family-container">
            {/* מציג את שם המדשפחה וההורים ככותרת ובפורם נותן אפשרות לעדכן */}
            <div className="single-family-info">
                {`${family.name} ${family.husband.first_name} ${family.wife.first_name}`}
            </div>
            <div className="single-family-form-container">
                <form className="single-family-form">
                    <input type="text" required name="familyName" placeholder="שם משפחה" />
                    <input type="text" required name="username" placeholder="שם משתמש" />
                    <input type="password" required name="password" placeholder="סיסמה" />
                    <h3>פרטי הבעל</h3>
                    <input type="text" name="husbandName" placeholder="שם" />
                    <input type="text" name="husbandTZ" placeholder="ת.ז." />
                    <input type="date" name="birthDate" placeholder="תאריך לידה" />
                    <input type="text" name="phone" placeholder="פלאפון" />
                    <input type="text" name="occupation" placeholder="עיסוק" />
                    <input type="text" name="workPlace" placeholder="מקום עבודה" />
                    <h3>פרטי האשה</h3>
                    <input type="text" name="husbandName" placeholder="שם" />
                    <input type="text" name="husbandTZ" placeholder="ת.ז." />
                    <input type="date" name="birthDate" placeholder="תאריך לידה" />
                    <input type="text" name="phone" placeholder="פלאפון" />
                    <input type="text" name="occupation" placeholder="עיסוק" />
                    <input type="text" name="workPlace" placeholder="מקום עבודה" />

                    <input type="text" name="street" placeholder="רחוב" />
                    <input type="text" name="neighborhood" placeholder="שכונה" />
                    <input type="text" name="city" placeholder="עיר" />
                    <input type="text" name="phone" placeholder="טלפון" />
                    <input type="email" name="email" placeholder="אימייל" />

                    <select required="true" name="maritalStatus">
                        <option value="">מצב משפחתי</option>
                        <option value="נשוי/אה">נשוי/אה</option>
                        <option value="רווק/ה">רווק/ה</option>
                        <option value="גרוש/ה">גרוש/ה</option>
                        <option value="פרוד/ה">פרוד/ה</option>
                        <option value="אלמן/נה">אלמן/נה</option>
                    </select>

                    <h3>פרטי בנק</h3>
                    <input type="text" required="true" name="bankDetails" placeholder="שם בעל החשבון" />
                    <input type="text" required="true" name="bankNumber" placeholder="מספר בנק" />
                    <input type="text" required="true" name="branchNumber" placeholder="מספר סניף" />
                    <input type="text" required="true" name="accountNumber" placeholder="מספר חשבון" />

                    <h4>נציג</h4>
                    {family.employee}
                    <h4>מאושר</h4>
                    {family.approved}
                    <h4>ממתין לטיפול</h4>
                    {family.waiting}
                    <button>עדכון</button>
                </form>
            </div>
        </div>
    )
}

export default SingleFamily
