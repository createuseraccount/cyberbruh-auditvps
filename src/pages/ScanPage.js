import React from "react";

const ScanPage = () => {
    return (
        <div>
            <h2>Scan Your VPS</h2>
            <form>
                <label>
                    VPS IP Address:
                    <input type="text" name="ip" />
                </label>
                <button type="submit">Scan</button>
            </form>
        </div>
    );
};

export default ScanPage;
