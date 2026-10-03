---
title: Orodruin (Mid/High-Power Rocket)
summary: Assembling, painting, and flying the LOC Magnum 3.1" 29mm rocket kit.
type: [Rocketry]
tags: [OpenRocket]
status: in progress
featured: false
order: 5
cover: orodruin.png
---

# Orodruin

Orodruin (a Sindarin name for Mount Doom) is a LOC Precision Magnum 3.1" 29mm rocket that I will assemble and style with a volcanic theme.
My plan is to fly it twice on a G74-6W, and if that goes well, attempt my L1 certification on an H-class motor like the H115DM.
My objectives for my L1 launch (and the G-motor launch, I suppose) are to have a low and slow flight, a relatively inexpensive build, and successful recovery.

More specifically:
1. The apogee shall not exceed 2,500ft.
2. The total cost of the rocket (excluding motors) shall not exceed $150.
3. The rocket shall be recovered with all parts fully intact.   

## 1. *What the heck does any of that mean?*

### 1a. The Kit

I'm using the [Magnum 3.1"](https://locprecision.com/products/magnum-3) kit from the rocketry company [LOC Precision](https://locprecision.com/). 3.1" refers to the diameter of the body tube of the rocket, while 29mm is the diameter of the rocket motor. There are a lot of different motor sizes, but some common mid-power and entry high-power sizes are 24mm, 29mm, and 38mm.

### 1b. The Motor

I'm planning on flying Orodruin on a **G74-6W** for its first two flights. This is mainly because it's one of the few motors in stock near my house, and it works nicely with the weight and size of my rocket. I've run a couple sims with this motor, and the apogee and ground hit velocity are acceptable (more on simulations later). I'll also explain how to read **G74-6W** below, because it looks more like a serial number than a name.

**G is the total impulse class.** Each class indicates a range of total impulse values for its motors, starting from A (1.26-2.50 N-sec) and doubling the maximum total impulse with each letter. For example, a B class motor has a range of 2.51-5.00 N-sec, and a C class motor has a range of 5.01-10.00 N-sec. This motor's range is 80.01 to 160.00 N-sec.

**74 is the average thrust of the motor in newtons.** The higher the number, the larger the force and acceleration. Sometimes the spec sheet will show a different number than what's in the name (AeroTech's website shows 79.6 for this one), and the motor will most likely experience a different average thrust when you fly it; that's fine and normal. Take that number as an estimate.

**6 is the delay time in seconds.** Every motor has propellant grain (which produces thrust), a slow-burning chemical called the delay charge, and a little bit of black powder called the ejection charge. The delay charge acts as a timer after your motor burns out until your black powder fires and pushes out the recovery system. You want to pick/adjust\* this number so that your recovery system deploys as close to apogee (apex) as possible, when the rocket is moving slowest.

\**Some motors, sometimes marked with an **A** after the delay time, have an adjustable delay time. This is achieved by drilling into the motor and removing some of the delay charge. It should never be attempted on a fixed-delay motor.*

Sometimes you'll also see other letters in a motor's name. The AeroTech G74-6W shows up as **G74-6**, **G74W-6**, **G74-6W**, and **G74W-6W** depending on which site I look at. The **W** stands for "White Lightning," and it's the propellant type used in this motor. Not every motor or company will specify this.

### 1c. The Certification Process

For context, there are two major rocketry organizations in the United States: the **National Association of Rocketry (NAR)** and the **Tripoli Rocketry Association (TRA)**. They each have local clubs with regular meetings and launches, and one benefit of joining one of these organizations is that you can get different levels of certification. There are three levels, from Level 1 (L1) to L3, and they grant you different privileges. The higher your certification level, the more powerful and advanced rockets you can fly, and you can also do more dangerous stuff like creating your own propellant (TRA only) or flying massive rockets. 

The certification process gets more difficult with each level, but for L1, I need to: 
1. Have a stable launch on an H or I motor
2. Have successful deployment of my recovery system
3. Have my rocket land in a flyable condition 
4. Be 18+, be a NAR or TRA member, pass my pre-flight inspection, have a certifying witness, blah, blah, blah...

*Not too bad!*

### 1d. Some Other Useful Terms

- **Apogee** - the maximum altitude achieved during a launch
- **Center of Gravity (CG)** - the center of mass or balancing point
- **Center of Pressure (CP)** - similar to CG, but using surface area
- **High power** - generally H motors and up, with a few exceptions for lower class motors. Requires certification to fly
- **Margin of Stability** - the distance between CG and CP, measured in calibers (1 caliber = length of the body tube). The CG should be ahead of the CP for a straight flight.