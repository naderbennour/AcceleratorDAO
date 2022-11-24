const AcceleratorDAO = artifacts.require('AcceleratorDAO')

module.exports = async function (deployer) {
  await deployer.deploy(AcceleratorDAO)
}
