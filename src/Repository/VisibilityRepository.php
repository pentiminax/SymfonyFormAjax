<?php

namespace App\Repository;

use App\Entity\Visibility;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Visibility|null find($id, $lockMode = null, $lockVersion = null)
 * @method Visibility|null findOneBy(array $criteria, array $orderBy = null)
 * @method Visibility[]    findAll()
 * @method Visibility[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VisibilityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Visibility::class);
    }
}
