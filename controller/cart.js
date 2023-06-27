const { Panier } = require('./model');

// Contrôleur pour ajouter un produit au panier
async function ajouterProduitAuPanier(req, res) {
  // ...
}

// Contrôleur pour mettre à jour la quantité d'un produit dans le panier
async function mettreAJourQuantiteProduit(req, res) {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    // Mettez à jour la quantité du produit dans le panier
    await Panier.findByIdAndUpdate(id, { quantity });

    res.json({ success: true, message: 'Quantité du produit mise à jour avec succès' });
  } catch (err) {
    console.error('Une erreur s\'est produite :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite' });
  }
}

// Contrôleur pour supprimer un produit du panier
async function supprimerProduitDuPanier(req, res) {
  const { id } = req.params;

  try {
    // Supprimez le produit du panier
    await Panier.findByIdAndDelete(id);

    res.json({ success: true, message: 'Produit supprimé du panier avec succès' });
  } catch (err) {
    console.error('Une erreur s\'est produite :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite' });
  }
}
// Contrôleur pour récupérer tous les éléments du panier par userId
async function getPanierByUserId(req, res) {
    const { userId } = req.params;
  
    try {
      // Récupérez tous les éléments du panier par userId
      const panier = await Panier.find({ userId });
  
      res.json({ success: true, panier });
    } catch (err) {
      console.error('Une erreur s\'est produite :', err);
      res.status(500).json({ error: 'Une erreur s\'est produite' });
    }
  }
  
  module.exports = {
    ajouterProduitAuPanier,
    mettreAJourQuantiteProduit,
    supprimerProduitDuPanier,
    getPanierByUserId
  };
  