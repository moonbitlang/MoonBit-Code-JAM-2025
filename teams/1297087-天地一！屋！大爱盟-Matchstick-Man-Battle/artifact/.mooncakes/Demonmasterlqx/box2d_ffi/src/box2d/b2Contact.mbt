// js\box2d-js\js\box2d\dynamics\contacts\b2Contact.js

// B2Contact

// GetShape1 GetShape2 GetManifoldCount() GetManifolds() GetNext()

pub extern "js" fn B2Contact::getShape1(self : B2Contact) -> B2Shape =
  #| self => self.GetShape1()

pub extern "js" fn B2Contact::getShape2(self : B2Contact) -> B2Shape =
  #| self => self.GetShape2()

pub extern "js" fn B2Contact::getManifoldCount(self : B2Contact) -> Int =
  #| self => self.GetManifoldCount()

pub extern "js" fn B2Contact::getManifolds(self : B2Contact) -> FixedArray[B2Manifold] =
  #| (self) => {
  #|   let folds = self.GetManifolds();
  #|   if (folds == null) {
  #|     return [];
  #|   }
  #|   return folds;
  #|}