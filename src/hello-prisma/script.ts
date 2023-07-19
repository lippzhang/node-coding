import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // createTest()
  // findTest()
  // createRelationTest()
  findTestDetail()
}
// @ts-ignore
const findTestDetail = async function() {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
}

// @ts-ignore
const createRelationTest = async function(){
  const user = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@prisma.io',
      posts: {
        create: {
          title: 'Hello World',
        },
      },
    },
  })
  console.log(user)
}

// @ts-ignore
const findTest = async () => {
  const users = await prisma.user.findMany()
  console.log(users)
}

// @ts-ignore
const createTest = async () => {
  const user2 = await prisma.user.create({
    data: {
      email: 'user2@prisma',
      name: 'prisma',
    }
  })
  console.log("🚀 ~ file: script.ts:12 ~ main ~ user2:", user2)
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })