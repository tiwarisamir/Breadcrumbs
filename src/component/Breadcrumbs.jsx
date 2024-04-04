import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";
  return (
    <div className="pl-10 text-zinc-800 font-semibold">
      {pathnames.length > 0 && (
        <div className="  border-b-2">
          {pathnames.length > 0 && <Link to="/">Home</Link>}
          {pathnames.map((name, index) => {
            breadcrumbPath += `/${name}`;
            const islast = index === pathnames.length - 1;
            return islast ? (
              <span key={index} className="text-zinc-600">
                /{name}
              </span>
            ) : (
              <span key={index}>
                /<Link to={breadcrumbPath}>{name}</Link>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Breadcrumbs;
