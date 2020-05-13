// Full credit to https://gist.github.com/stekhn/aa5b03f693270344cba58d9306e7f6f3

const quantizeScale = (arr, min, max) => {
  const steps = arr.length
  const increment = (max - min) / steps
  const bins = Array.apply(undefined, Array(steps)).map(
    (bin, index) => index * increment + min
  )

  return (value) => {
    for (let i = 0; i < bins.length; i++) {
      if (value <= bins[i]) {
        return arr[i]
      }
    }
    return arr[arr.length - 1]
  }
}

export default quantizeScale
