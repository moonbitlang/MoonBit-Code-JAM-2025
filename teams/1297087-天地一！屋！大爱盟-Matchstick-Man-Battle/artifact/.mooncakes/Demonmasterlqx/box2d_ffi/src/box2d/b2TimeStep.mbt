// box2d/dynamics/b2TimeStep.js

pub extern "js" fn b2TimeStep() -> B2TimeStep =
  #| () => new b2TimeStep()

// setter
pub extern "js" fn B2TimeStep::setDt(self: B2TimeStep, dt: Double) =
  #| (self, dt) => { self.dt = dt }

pub extern "js" fn B2TimeStep::setInvDt(self: B2TimeStep, inv_dt: Double) =
  #| (self, inv_dt) => { self.inv_dt = inv_dt }

pub extern "js" fn B2TimeStep::setIterations(self: B2TimeStep, iterations: Int) =
  #| (self, iterations) => { self.iterations = iterations }

// getter
pub extern "js" fn B2TimeStep::getDt(self: B2TimeStep) -> Double =
  #| self => self.dt

pub extern "js" fn B2TimeStep::getInvDt(self: B2TimeStep) -> Double =
  #| self => self.inv_dt

pub extern "js" fn B2TimeStep::getIterations(self: B2TimeStep) -> Int =
  #| self => self.iterations

