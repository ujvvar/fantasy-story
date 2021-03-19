function RandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

  const fantasyLife = {
    planet: ['Jupiter', 'Saturn', 'Venus', 'Mars'],
    destiny: ['king', 'priest', 'wizard', 'conqueror', 'servant'],
    action: ['practice sword fighting', 'meditate more', 'summon spirits', 'keep a close eye on everyone ', 'let go of your pride']
  }
  
  let uniqueStory = []

  for(let prop in fantasyLife) {
    let optionIdx = RandomNumber(fantasyLife[prop].length)
  
    switch(prop) {
      case 'planet':
        uniqueStory.push(`You were born under the sign of "${fantasyLife[prop][optionIdx]}".`)
        break
      case 'destiny':
        uniqueStory.push(`You are destined to be a "${fantasyLife[prop][optionIdx]}".`)
        break
      case 'action':
        uniqueStory.push(`To fulfill your fate, "${fantasyLife[prop][optionIdx]}".`)
        break
      default:
        uniqueStory.push('How could one know?')
    }
  }

  function tellAStory(fate) {
      const tale = uniqueStory.join('\n')
      console.log(tale)
  }

  tellAStory(uniqueStory);