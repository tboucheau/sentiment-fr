import React from 'react';

const AccessDenied = () => {
  return (
    <div className="container">
      <h1 className="mt-5">Accès Refusé</h1>
      <p>Vous n'êtes pas autorisé à accéder à cette application.</p>
      <p>Veuillez vérifier l'URL ou contacter l'administrateur si vous pensez que c'est une erreur.</p>
      <div className="mt-4">
        <a href="https://app.predai.io" className="btn btn-primary">Retour à la page d'accueil</a>
      </div>
    </div>
  );
};

export default AccessDenied;
