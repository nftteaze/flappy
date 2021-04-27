import React from "react";
import onSubmit from "../redux/actions/userForm";
import { connect } from "react-redux";

const UserForm = ({ onSubmit }) => (
    <form
        style={{
            position: "relative",
            top: 300,
            zIndex: 5,
            background: "#82E38B",
        }}
        onSubmit={onSubmit}
    >
        <fieldset>
            <label>Name</label>
            <input
                type="text"
                placeholder=""
                required
                id="username"
                name="username"
                style={{
                    marginLeft: 10,
                    marginRight: 10,
                }}
            />
            <button type="submit">OK</button>
        </fieldset>
    </form>
);

const mapDispatchToProps = {
    onSubmit,
};

export default connect(null, mapDispatchToProps)(UserForm);
