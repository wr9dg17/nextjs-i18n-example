import { Children } from "react";
import { withRouter } from "next/router";
import { Link } from "../../services/i18n";

const ActiveLink = ({ router, children, ...props }) => (
    <Link {...props}>
        {React.cloneElement(Children.only(children), {
            className: router.pathname === props.href ? "active" : null,
        })}
    </Link>
);

export default withRouter(ActiveLink);
