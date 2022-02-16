export const AuthRoutes = {
  login: "/login",
  register: "/register",
};

export const ErrorRoute = {
  error: "/404",
};

export const SectionRoutes = {
  animals: "/animals",
  food: "/food",
  cages: "/containers",
  charts: "/charts",
  vets: "/vets",
  settings: "/settings",
};

export const BaseRoutes = {
  base: "/",
  ...SectionRoutes,
};

export const Sections = Object.values(SectionRoutes);
export const Routes = [
  AuthRoutes.login,
  AuthRoutes.register,
  BaseRoutes.base,
  Sections,
];
